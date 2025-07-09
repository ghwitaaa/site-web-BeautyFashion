<?php
// Contact form handler for Beauty & Fashion Shop
// This file processes the contact form submission

// Set content type to HTML
header('Content-Type: text/html; charset=UTF-8');

// Check if form was submitted via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Get form data and sanitize inputs
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
    $subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : 'General Inquiry';
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';
    
    // Validation
    $errors = [];
    
    // Check if required fields are filled
    if (empty($name)) {
        $errors[] = 'Name is required.';
    }
    
    if (empty($email)) {
        $errors[] = 'Email is required.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Please enter a valid email address.';
    }
    
    if (empty($message)) {
        $errors[] = 'Message is required.';
    }
    
    // If there are no errors, process the form
    if (empty($errors)) {
        
        // Prepare email content
        $to = 'info@beautyfashion.com'; // Replace with actual email
        $email_subject = 'New Contact Form Submission: ' . $subject;
        
        $email_body = "
        New contact form submission from Beauty & Fashion Shop website:
        
        Name: $name
        Email: $email
        Subject: $subject
        Message:
        $message
        
        ---
        This message was sent from the contact form on your website.
        ";
        
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
        
        // In a real application, you would send the email here
        // mail($to, $email_subject, $email_body, $headers);
        
        // For demo purposes, we'll just log the submission
        $log_entry = date('Y-m-d H:i:s') . " - Name: $name, Email: $email, Subject: $subject\n";
        file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
        
        // Return success response
        ?>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Message Sent - Beauty & Fashion Shop</title>
            <link rel="stylesheet" href="style.css">
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
            <style>
                .success-container {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #fef7f0, #f8e8f5);
                }
                .success-card {
                    background: white;
                    padding: 3rem;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    text-align: center;
                    max-width: 500px;
                    margin: 2rem;
                }
                .success-icon {
                    font-size: 4rem;
                    margin-bottom: 1rem;
                }
                .back-btn {
                    display: inline-block;
                    background: linear-gradient(135deg, #f8b4d9, #e8a2c8);
                    color: white;
                    padding: 1rem 2rem;
                    text-decoration: none;
                    border-radius: 50px;
                    font-weight: 600;
                    margin-top: 2rem;
                    transition: all 0.3s ease;
                }
                .back-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }
            </style>
        </head>
        <body>
            <div class="success-container">
                <div class="success-card">
                    <div class="success-icon">✅</div>
                    <h1>Message Sent Successfully!</h1>
                    <p>Thank you for contacting us, <strong><?php echo $name; ?></strong>!</p>
                    <p>We have received your message and will get back to you at <strong><?php echo $email; ?></strong> as soon as possible.</p>
                    <p>In the meantime, feel free to explore our beautiful collection of products.</p>
                    <a href="index.html" class="back-btn">Back to Home</a>
                </div>
            </div>
        </body>
        </html>
        <?php
        
    } else {
        // Return error response
        ?>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form Error - Beauty & Fashion Shop</title>
            <link rel="stylesheet" href="style.css">
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
            <style>
                .error-container {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #fef7f0, #f8e8f5);
                }
                .error-card {
                    background: white;
                    padding: 3rem;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    text-align: center;
                    max-width: 500px;
                    margin: 2rem;
                }
                .error-icon {
                    font-size: 4rem;
                    margin-bottom: 1rem;
                }
                .error-list {
                    text-align: left;
                    background: #fff5f5;
                    padding: 1rem;
                    border-radius: 10px;
                    margin: 1rem 0;
                }
                .error-list ul {
                    margin: 0;
                    padding-left: 1.5rem;
                }
                .error-list li {
                    color: #e53e3e;
                    margin-bottom: 0.5rem;
                }
                .back-btn {
                    display: inline-block;
                    background: linear-gradient(135deg, #f8b4d9, #e8a2c8);
                    color: white;
                    padding: 1rem 2rem;
                    text-decoration: none;
                    border-radius: 50px;
                    font-weight: 600;
                    margin-top: 2rem;
                    transition: all 0.3s ease;
                }
                .back-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }
            </style>
        </head>
        <body>
            <div class="error-container">
                <div class="error-card">
                    <div class="error-icon">⚠️</div>
                    <h1>Form Submission Error</h1>
                    <p>Please correct the following errors and try again:</p>
                    <div class="error-list">
                        <ul>
                            <?php foreach ($errors as $error): ?>
                                <li><?php echo $error; ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <a href="contact.html" class="back-btn">Back to Contact Form</a>
                </div>
            </div>
        </body>
        </html>
        <?php
    }
    
} else {
    // If accessed directly without POST, redirect to contact page
    header('Location: contact.html');
    exit();
}
?> 