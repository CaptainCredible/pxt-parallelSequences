
> Open this page at [https://captaincredible.github.io/pxt-parallelsequences/](https://captaincredible.github.io/pxt-parallelsequences/)

This is an extension that simplifies the process of writing parallel threads that can be started simultaniously and run in synchronization with oneanother.

set up parallel threads like this: 

parallellSequences.parallellSequence(sequences.sequenceOne, function() {
    led.toggleAll()
    basic.pause(1000)
    led.toggleAll()
    basic.pause(1000)

})

start the threads with:
parallellSequences.startParallelSequence(sequences.sequenceOne) 



## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/captaincredible/pxt-parallelsequences** and import

## Edit this project ![Build status badge](https://github.com/captaincredible/pxt-parallelsequences/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/captaincredible/pxt-parallelsequences** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/captaincredible/pxt-parallelsequences/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
