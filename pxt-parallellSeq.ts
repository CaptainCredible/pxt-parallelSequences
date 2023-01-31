enum sequences {
    //%block="sequence one"
    sequenceOne = 81,
    //%block="sequence two"
    sequenceTwo = 82,
    //%block="sequence three"
    sequenceThree = 83,
    //%block="sequence four"
    sequenceFour = 84,
    //%block="sequence five"
    sequenceFive = 85,
    //%block="sequence six"
    sequenceSix = 86,
    //%block="sequence seven"
    sequenceSeven = 87,
    //%block="sequence eight"
    sequenceEight = 88
}

namespace parallellSequences {
    //%block="start parallell| $seqSelex"
    export function startParallelSequence(seqSelex: sequences): void {
        control.raiseEvent(seqSelex, 1337)
    }

    //%block="setup parallell| $seqSelex"
    export function parallellSequence(seqSelex: sequences, thing: () => void) {
        control.onEvent(seqSelex, 1337, thing);
    }
}
