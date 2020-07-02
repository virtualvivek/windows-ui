   $('#show-notification-default-simple').on('click', function () {
        WinNotification.notify(getOptions());
    });





    $('#show-notification-default-alert').on('click', function () {
        var options = getOptions();
        options.title = 'Hello!';
        options.description = 'I am a default windows notification. I am a default windows notification. I am a default windows notification. I am a default notification.';
        options.width = 350;
        WinNotification.notify(options);
    });





    $('#show-notification-default-success').on('click', function () {
        var options = getOptions();
        options.title = 'Well Done!';
        options.description = 'Data has been succesfully recored.';
        options.type = 'success';
        WinNotification.notify(options);
    });





    $('#show-notification-default-error').on('click', function () {
        var options = getOptions();
        options.title = 'Warning!';
        options.description = 'The modified data may lost on proceed.';
        options.type = 'error'; // or danger
        WinNotification.notify(options);
    });





    $('#show-notification-default-warning').on('click', function () {
        var options = getOptions();
        options.title = 'Reminder!';
        options.description = 'You have a meeting at 9:11 АМ';
        options.type = 'warning';
        WinNotification.notify(options);
    });





    $('#show-notification-default-info').on('click', function () {
        var options = getOptions();
        options.title = 'Sorry!';
        options.description = 'Could not complete your request.Try again later!';
        options.type = 'info';
        //options.image = 'img/info.png';
        options.image = {
            visible: true
        };
        WinNotification.notify(options);
    });






    $('#show-notification-icon-alert').on('click', function () {
        var options = getOptions();
        options.title = 'Hello!';
        options.description = 'I am a default windows notification.';
        //options.image = 'img/default.png';
        options.image = {
            visible: true
        };
        WinNotification.notify(options);
    });





    $('#show-notification-icon-success').on('click', function () {
        var options = getOptions();
        options.title = 'Well Done!';
        options.description = 'Data has been succesfully recored.';
        //options.image = 'img/success.png';
        options.image = {
            visible: true
        };
        options.type = 'success';
        WinNotification.notify(options);
    });





    $('#show-notification-icon-error').on('click', function () {
        var options = getOptions();
        options.title = 'Warning!';
        options.description = 'The modified data may lost on proceed.';
        //options.image = 'img/danger.png';
        options.image = {
            visible: true
        };
        options.type = 'danger';
        WinNotification.notify(options);
    });





    $('#show-notification-icon-warning').on('click', function () {
        var options = getOptions();
        options.title = 'Reminder!';
        options.description = 'You have a meeting at 9:11 АМ';
        //options.image = 'img/warning.png';
        options.image = {
            visible: true
        };
        options.type = 'warning';
        WinNotification.notify(options);
    });





    $('#show-notification-icon-info').on('click', function () {
        var options = getOptions();
        options.title = 'Sorry!';
        options.description = 'Could not complete your request.Try again later!';
        options.image = {
            visible: true
        };
        options.type = 'info';
        options.showButtons=true;

        WinNotification.notify(options);
    });





    $('#show-notification-close-all').on('click', function () {
        WinNotification.closeAll();
    });
