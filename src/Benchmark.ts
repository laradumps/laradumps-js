import { _LaraDumps } from "./LaraDumps";

export default {
    benchmark(...params): _LaraDumps {
        const marks = [];

        const data = typeof(params[0]) === 'object'
            ? params[0]
            : params;

        Promise.all(Object.values(data).map((param: Function, index) => {
            let label = Object.keys(data)[index];

            marks[label] = {
                start_time: Date.now(),
                end_time: null,
                total_time: null
            };

            return new Promise(async (resolve) => {
                await param(resolve);
            }).finally(() => {
                marks[label].end_time = Date.now();
                marks[label].total_time = marks[label].end_time - marks[label].start_time;
            });
        })).finally(() => {
            this.sendMarks(marks);
        });

        return this;
    },

    sendMarks(marks: any[]): _LaraDumps {
        let dataMarks = {
            Fastest: []
        };
    
        Object.values(marks).forEach((mark, index) => {
                let label = Object.keys(marks)[index];

                if(!isNaN(parseInt(label as string))) {
                    label = `Closure ${label}`;
                }

                if((dataMarks.Fastest[1] ?? mark.end_time + 1) > mark.end_time) {
                    dataMarks.Fastest = [
                        label,
                        mark.end_time
                    ];
                }
                
                dataMarks[label] = [
                    `Start time: ${new Date(mark.start_time).toLocaleString()}
                    End time: ${new Date(mark.end_time).toLocaleString()}
                    Total time: ${mark.total_time} ms`,
                    mark.end_time
                ];
            });

        return this.tableV2(dataMarks, "Benchmark");
    }
}