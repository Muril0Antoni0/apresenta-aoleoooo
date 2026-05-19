const loginBtn = document.getElementById('login-btn');
const passwordInput = document.getElementById('admin-password');
const loginForm = document.getElementById('login-form');
const adminPanel = document.getElementById('admin-panel');

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        if (passwordInput.value === 'admin123') {
            loginForm.style.display = 'none';
            adminPanel.style.display = 'block';
            carregarDados();
        } else {
            alert('Senha incorreta!');
        }
    });
}

function carregarDados() {
    const defaultParticipantes = [
        {
            nome: 'Murilo Antonio da Silva',
            ra: '25302917-2',
            curso: 'ADS',
            serie: '3 semestre',
            confirmacao: 'Confirmação de presença no Coffee Break'
        },
        {
            nome: 'Larissa Pereira',
            ra: '25302920-3',
            curso: 'Análise e Desenvolvimento de Sistemas',
            serie: '4 semestre',
            confirmacao: 'Confirmação de presença no Coffee Break'
        },
        {
            nome: 'Eduardo Santos',
            ra: '25302921-4',
            curso: 'Ciência da Computação',
            serie: '5 semestre',
            confirmacao: 'Confirmação de presença no Coffee Break'
        }
    ];

    const defaultPalestrantes = [
        {
            nome: 'Gustavo Melles',
            tema: 'Pense com IA — A revolução da inteligência ampliada',
            data: '01/06/2026',
            hora: '19:15',
            contato: '(43) 99911-2233',
            email: 'gustavo.melles@email.com'
        },
        {
            nome: 'Jessy Borges Ferracioli',
            tema: 'Os data taggers e o trabalho invisível por trás da inteligência artificial',
            data: '01/06/2026',
            hora: '20:30',
            contato: '(43) 99822-3344',
            email: 'jessy.ferracioli@email.com'
        },
        {
            nome: 'Luciano Soler',
            tema: 'Construção e orquestração de agentes de IA',
            data: '02/06/2026',
            hora: '19:15',
            contato: '(43) 99733-4455',
            email: 'luciano.soler@email.com'
        },
        {
            nome: 'Michel Cesar Leme Banaggiuro',
            tema: 'O programador morreu! Vida longa ao programador',
            data: '02/06/2026',
            hora: '20:30',
            contato: '(43) 99644-5566',
            email: 'michel.banaggiuro@email.com'
        },
        {
            nome: 'Luiz Fernando Pereira Nunes',
            tema: 'IA e proteção de dados — desafios, ética e segurança na era digital',
            data: '03/06/2026',
            hora: '19:15',
            contato: '(43) 99555-6677',
            email: 'luiz.nunes@email.com'
        }
    ];

    const defaultProjetos = [
        {
            nomeProjeto: 'Smart Assist',
            descProjeto: 'Assistente virtual para alunos com aprendizado personalizado.'
        },
        {
            nomeProjeto: 'EcoTrack',
            descProjeto: 'Aplicativo de monitoramento de consumo de energia em tempo real.'
        },
        {
            nomeProjeto: 'DataSafe',
            descProjeto: 'Plataforma de proteção e auditoria de dados com IA.'
        }
    ];

    const participantes = JSON.parse(localStorage.getItem('participantes') || JSON.stringify(defaultParticipantes));
    const palestrantes = JSON.parse(localStorage.getItem('palestrantes') || JSON.stringify(defaultPalestrantes));
    const projetos = JSON.parse(localStorage.getItem('projetos') || JSON.stringify(defaultProjetos));
    const presencas = JSON.parse(localStorage.getItem('presencas') || '[]');

    document.getElementById('stat-participantes-count').textContent = participantes.length;
    document.getElementById('stat-palestrantes-count').textContent = palestrantes.length;
    document.getElementById('stat-projetos-count').textContent = projetos.length;
    document.getElementById('stat-presencas-count').textContent = presencas.length;

    document.getElementById('participantes-list').innerHTML = participantes.map(p => `
        <div class="admin-item">
            <strong>${p.nome}</strong><br>
            RA: ${p.ra}<br>
            Curso: ${p.curso} · Série: ${p.serie}<br>
            <em>${p.confirmacao}</em>
        </div>
    `).join('');

    document.getElementById('palestrantes-list').innerHTML = palestrantes.map(p => `
        <div class="admin-item">
            <strong>${p.nome}</strong><br>
            <span>Tema:</span> ${p.tema}<br>
            <span>Data / Hora:</span> ${p.data} · ${p.hora}<br>
            <span>Contato:</span> ${p.contato} · ${p.email}
        </div>
    `).join('');

    document.getElementById('projetos-list').innerHTML = projetos.map(p => `
        <div class="admin-item">
            <strong>${p.nomeProjeto}</strong><br>
            ${p.descProjeto}
        </div>
    `).join('');

    document.getElementById('presencas-list').innerHTML = presencas.length > 0
        ? presencas.map(p => `<div class="admin-item"><strong>${p.palestra}</strong> - ${p.timestamp}</div>`).join('')
        : '<div class="admin-item">Nenhuma presença registrada ainda.</div>';
}

if (window.tsParticles) {
    tsParticles.load('tsparticles-admin', {
        particles: {
            number: {
                value: 100
            },
            color: {
                value: '#ffffff'
            },
            links: {
                enable: true,
                distance: 130,
                color: '#ffffff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5
            },
            size: {
                value: 2
            },
            opacity: {
                value: 0.6
            }
        },
        background: {
            color: 'transparent'
        }
    });
} else {
    window.addEventListener('load', () => {
        if (window.tsParticles) {
            tsParticles.load('tsparticles-admin', {
                particles: {
                    number: {
                        value: 100
                    },
                    color: {
                        value: '#ffffff'
                    },
                    links: {
                        enable: true,
                        distance: 130,
                        color: '#ffffff',
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1.5
                    },
                    size: {
                        value: 2
                    },
                    opacity: {
                        value: 0.6
                    }
                },
                background: {
                    color: 'transparent'
                }
            });
        }
    });
}
