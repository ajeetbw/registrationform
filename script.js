$(document).ready(function() {
    
    $("#registrationForm").on("submit", function(event) {
        event.preventDefault();  

        var formData = $(this).serialize();  

        // Submit the form via AJAX
        $.ajax({
            type: "POST",
            url: "submit.php",
            data: formData,
            success: function(response) {
                
                $("#registrationForm").hide();
                $("#output").show();
                $("#output").html(response); 
            },
            error: function() {
                alert("There was an error processing your form. Please try again.");
            }
        });
    });
});
