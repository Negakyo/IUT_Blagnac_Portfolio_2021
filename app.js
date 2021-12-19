function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/921956286290100224/DMzsnQzrdcfp451W0Z_PgVmuqbXNhUn4zuZFvamAkiH-gtBoESnsb2SJ9p3oUAJamgWd");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "reception",
      avatar_url: "https://cdn.discordapp.com/attachments/921957232306958407/921957731705962496/portfolio-avatar.jpeg",
      content:  '\nNom :' + document.querySelector(".nom").value + '\nPrenom :' + document.querySelector(".prenom").value + '\nMail :' + document.querySelector(".mail").value + '\nMessage :' + document.querySelector(".message").value
    }

    request.send(JSON.stringify(params));
}