 $("#show-notification-default-simple").on("click", function () {
        WinNotification.notify(getOptions());
    });





    $("#show-notification-default-alert").on("click", function () {
        var options = getOptions();
        options.title = "Hello!";
        options.description = "I am a default windows notification. I am a default windows notification. I am a default windows notification. I am a default notification.";
        options.width = 350;
        WinNotification.notify(options);
    });





    $("#show-notification-default-success").on("click", function () {
        var options = getOptions();
        options.title = "Well Done!";
        options.description = "Data has been succesfully recored.";
        options.type = "success";
        WinNotification.notify(options);
    });





    $("#show-notification-default-danger").on("click", function () {
        var options = getOptions();
        options.title = "Warning!";
        options.description = "The data presentation here can be change.";
        options.type = "error"; // or danger
        WinNotification.notify(options);
    });





    $("#show-notification-default-warning").on("click", function () {
        var options = getOptions();
        options.title = "Reminder!";
        options.description = "You have a meeting at 9:11 АМ";
        options.type = "warning";
        WinNotification.notify(options);
    });





    $("#show-notification-default-info").on("click", function () {
        var options = getOptions();
        options.title = "Sorry!";
        options.description = "Icon Could not complete your transaction.";
        //options.image = "../../../img/favicon.ico";
        options.image = {
            visible: true,
            customImage:"../../../img/favicon.ico"
        };
        WinNotification.notify(options);
    });






    $("#show-notification-icon-alert").on("click", function () {
        var options = getOptions();
        options.title = "Hello!";
        options.description = "I am a default windows notification.";
        //options.image = "img/default.png";
        options.image = {
            visible: true
        };
        WinNotification.notify(options);
    });





    $("#show-notification-icon-success").on("click", function () {
        var options = getOptions();
        options.title = "Well Done!";
        options.description = "Data has been succesfully recored.";
        //options.image = "img/success.png";
        options.image = {
            visible: true
        };
        options.type = "success";
        WinNotification.notify(options);
    });





    $("#show-notification-icon-danger").on("click", function () {
        var options = getOptions();
        options.title = "Warning!";
        options.description = "The data presentation here can be change.";
        //options.image = "img/danger.png";
        options.image = {
            visible: true
        };
        options.type = "danger";
        WinNotification.notify(options);
    });





    $("#show-notification-icon-warning").on("click", function () {
        var options = getOptions();
        options.title = "Reminder!";
        options.description = "You have a meeting at 9:11 АМ";
        options.image = {
            visible: true,
            customImage:"src/core/img/favicon.ico"
        };
        WinNotification.notify(options);
    });





    $("#show-notification-icon-info").on("click", function () {
        var options = getOptions();
        options.title = "Sorry!";
        options.description = "Icon Could not complete your transaction.";
        options.image = {
            visible: true,
            customImage:"src/core/img/favicon.ico"
        };
        options.showButtons=true;
        
        options.buttons= {
            action: {
                text: 'iApply',
                callback: function () {
                        console.log('Apply button clicked');
                        alert("Apply button clicked");
                }
            },
            cancel: {
                text: 'Dismiss',
                callback: function () {
                        console.log('Dismiss button clicked');
                        alert("Dismiss button clicked");
                }
            }
        };
            
        WinNotification.notify(options);
    });





    $("#show-notification-close-all").on("click", function () {
        WinNotification.closeAll();
    });
