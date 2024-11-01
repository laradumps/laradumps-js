const {default: Benchmark} = require("../Benchmark");

describe('Benchmark', () => {
    it('should be able to send marks', async () => {
        Benchmark.tableV2 = jest.fn();  
        Benchmark.benchmark(
            (resolve) => resolve('First'),
            (resolve) => resolve('Second'),
        );

        Benchmark.promise.then(
            ([
                firstMark,
                secondMark
            ]) => expect(Benchmark.tableV2).toHaveBeenCalledWith({
                Fastest: [ 'Closure 0', firstMark.end_time ],
                'Closure 0': [
                    `Start time: ${new Date(firstMark.start_time).toLocaleString()}
                End time: ${new Date(firstMark.end_time).toLocaleString()}
                Total time: ${firstMark.total_time} ms`,
                    firstMark.end_time
                ],
                'Closure 1': [
                    `Start time: ${new Date(secondMark.start_time).toLocaleString()}
                End time: ${new Date(secondMark.end_time).toLocaleString()}
                Total time: ${secondMark.total_time} ms`,
                    secondMark.end_time
                ]
            }, 'Benchmark')
        );
    });
});