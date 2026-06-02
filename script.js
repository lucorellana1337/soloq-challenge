fetch("data.json")
    .then(res => res.json())
    .then(players => {

        players.sort((a, b) => b.lp - a.lp);

        const tbody = document.querySelector("tbody");

        players.forEach((player, index) => {

            tbody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${player.name}</td>
                    <td>${player.rank}</td>
                    <td>${player.lp}</td>
                    <td>
                        <a href="${player.opgg}" target="_blank">
                            Ver Perfil
                        </a>
                    </td>
                </tr>
            `;
        });

        document.getElementById("updated").textContent =
            "Última actualización: " +
            new Date().toLocaleString();
    });