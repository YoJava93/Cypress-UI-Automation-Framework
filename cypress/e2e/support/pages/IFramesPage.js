export class IFramesPage {

    get iFrameButton() {
        return 'a[href="/iframe"]' 
    }

    get externalIframeVideo() {
        return 'iframe[id="iframe-youtube"]'
    }

    get videoButton() {
        return 'button[class="ytp-large-play-button ytp-button ytp-large-play-button-red-bg"]'
    }


}