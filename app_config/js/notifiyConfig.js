 WinNotification.setGlobalOptions({
        buttons: {
            action: {
                text: 'Apply'
            },
            cancel: {
                text: 'Dismiss'
            }
        }
    });

    function getOptions() {
        var position = 'bottom-right'; // top-center, bottom-center, top-right, bottom-right, top-left, bottom-left
        var closeTimeout = 3000; //3sec
        var animation = 'slide'; //fade, none, slide
        var showButtons = false;
        var showProgressBar = false;
        var animationOptions = {
            open: animation + '-in',
            close: animation + '-out'
        };

        if (animation === 'none') {
            animationOptions = {
                open: false,
                close: false
            };
        }

        return options = {
            description: 'I am a default windows notification',
            position: position,
            closeTimeout: closeTimeout,
            closeWith: ['click'],
            animation: animationOptions,
            showButtons: showButtons,
            buttons: {
                action: {
                    callback: function (notification) {
                        console.log('action button');
                    }
                }
            },
            showProgress: showProgressBar
        };
    }
