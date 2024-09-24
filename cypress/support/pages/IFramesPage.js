export class IFramesPage {

    get iFrameButton() {
        return 'a[href="/iframe"]' 
    }

    get externalIframeVideo() {
        return 'video[class="video-stream html5-main-video"]'
    }

    get externalTextIframe() {
        return 'iframe[id="mce_0_ifr"]'
    }

    get externalTextIframeTypingBox() {
        return 'body[id="tinymce"]'
    }

}