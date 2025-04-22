function contact(type) {
    switch (type) {
        case 'email':
            // Replace with your real email
            window.location.href = 'mailto:gargijoshi0902@gmail.com';
            break;

        case 'linkedin':
            // Replace with your actual LinkedIn profile URL
            window.open('https://www.linkedin.com/in/gargi-joshi-a9246b331/', '_blank');
            break;

        case 'github':
            // Replace with your actual GitHub profile URL
            window.open('https://github.com/gargijoshi9', '_blank');
            break;

        default:
            alert('Contact method not available.');
    }
}
