parallellSequences.parallellSequence(sequences.sequenceOne, function() {
    led.toggleAll()
    basic.pause(1000)
    led.toggleAll()
    basic.pause(1000)

})


parallellSequences.startParallelSequence(sequences.sequenceOne)