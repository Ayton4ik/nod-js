import { alert, error, notice, success, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

// error({
//     title: 'Desktop Error',
//     text: 'Serious error is serious.',
//   });


// notice({
//     title: 'Desktop Notice',
//     text: 'I\'ll appear as a desktop notification. Unless I can\'t. I\'ll still appear as a regular PNotify notice then.',
//   });

// success({
//     title: 'Desktop Success',
//     text: 'All done! Come back to my tab!',
//   });

import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`)

instance.show()