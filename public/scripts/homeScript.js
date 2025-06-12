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

    // Popup Especificações ao clicar no ícone
    $('.task-actions').on("click", function (e) {
        e.stopPropagation(); // impede o clique no card de interferir

        const card = $(this).closest('.task-card');
        const nome = card.data("nome");
        let descricao = card.data("descricao");
        const prazo = card.data("prazo");
        const id = card.data("id")
        if(descricao == ""){
            descricao = 'Não há descrição para ser mostrada'
        }

        // Atualiza o conteúdo do popup
        $("#nome_taskEspec").text(nome);
        $('#descricaoEspec').text(descricao);
        $(".deadline").text(prazo);

        $("#formDelete").on("submit", function(){
           const certeza = window.confirm('Deseja mesmo deletar essa task?')
           if(certeza){
            $.ajax({
                url:"/api/tasks/" + id,
                method:"delete",
                success: function(){
                    window.location.reload()
                }
            },
        {
            error:function(error){
            console.error(error)
        }})
           }
            
    })

        // Exibe o popup
        $('#popupEspec').addClass('active');
    });

    // Fechar popup de especificações
    $('#closePopupEspec').click(function() {
        $('#popupEspec').removeClass('active');
    });

    $('#popupEspec').click(function(e) {
        if (e.target === this) {
            $(this).removeClass('active');
        }
    });

    // Remove classe ativa das tasks quando fecha o popup criar
    $("#closePopupCriar").on('click', function () {
        $('.task-card').removeClass('active');
    });

    // Adiciona classe ativa na task clicada
    $(".fas.fa-ellipsis-v").on("click", function () {
        $(this).closest('.task-card').addClass('active');
    });

});


