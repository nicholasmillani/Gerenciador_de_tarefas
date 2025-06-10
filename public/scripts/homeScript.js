    //Lógica do popup de criar task
    $(document).ready(function() {
        // Popup Criar Task
        $('#openPopup').click(function() {
            $('#popupCriar').addClass('active');
        });

        $('#closePopupCriar').click(function() {
            $('#popupCriar').removeClass('active');
        });

        $('#popupCriar').click(function(e) {
            if (e.target === this) {
                $(this).removeClass('active');
            }
        });

        // Popup Especificações
        $('.task-actions').click(function(e) {
            e.stopPropagation();
            const taskCard = $(this).closest('.task-card');
            const taskName = taskCard.find('h3').text();
            
            // Mostrar o popup
            $('#popupEspec').addClass('active');
        });

        $('#closePopupEspec').click(function() {
            $('#popupEspec').removeClass('active');
        });

        $('#popupEspec').click(function(e) {
            if (e.target === this) {
                $(this).removeClass('active');
            }
        });
    });

