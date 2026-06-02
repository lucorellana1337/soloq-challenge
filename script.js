fetch("data.json")
    .then(response => response.json())
    .then(players => {

        players.sort((a, b) => b.lp - a.lp);

        const tbody = document.querySelector("tbody");

        players.forEach((player, index) => {

            let medal = index + 1;

            if (index === 0) medal = "🥇";
            else if (index === 1) medal = "🥈";
            else if (index === 2) medal = "🥉";

            tbody.innerHTML += `
                <tr>
                    <td>${medal}</td>
                    <td>${player.name}</td>
                    <td>${player.rank}</td>
                    <td>${player.lp}</td>
                    <td>
                        <a
                            class="profile-btn"
                            href="${player.opgg}"
                            target="_blank"
                        >
                            OP.GG
                        </a>
                    </td>
                </tr>
            `;
        });

        document.getElementById("updated").textContent =
            "Última actualización: " +
            new Date().toLocaleString("es-CL");
    });