package com.ts.BVP.Skyline;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;
import java.util.Random;


public class OtpVErification {

    public static void main(String[] args) {
        String userEmail = "user@example.com"; // User's email
        String otp = generateOTP(); // Generate OTP

        // SMTP server configuration
        String smtpHost = "smtp.gmail.com";
        int smtpPort = 587;
        String username = "kprnay630@gmail.com"; // Your email
        String password = "7396683272"; // Your password

        // Email properties
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", smtpHost);
        props.put("mail.smtp.port", smtpPort);

        // Create a session with authentication
        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            // Create a default MimeMessage object
            Message message = new MimeMessage(session);

            // Set From: header field of the header
            message.setFrom(new InternetAddress(username));

            // Set To: header field of the header
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(userEmail));

            // Set Subject: header field
            message.setSubject("OTP Verification");

            // Now set the actual message
            message.setText("Your OTP for verification is: " + otp);

            // Send message
            Transport.send(message);

            System.out.println("Sent OTP to " + userEmail);
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

    // Method to generate a random 6-digit OTP
    private static String generateOTP() {
        Random random = new Random();
        int otp = 100_000 + random.nextInt(900_000); // Generates a number between 100000 and 999999
        return String.valueOf(otp);
    }
}
