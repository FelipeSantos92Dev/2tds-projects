class Pet {
  constructor(tutor, petName, species, avatar, birthDate) {
    this.tutor = tutor;
    this.petName = petName;
    this.species = species;
    this.avatar = avatar;
    this.age = this.getAge(birthDate);
  }

  getAge(birthDate) {
    // Calcula a idade com anos e meses
    const today = new Date();
    const birthDateArray = birthDate.split("-");
    const birthDateObj = new Date(
      birthDateArray[0],
      birthDateArray[1] - 1,
      birthDateArray[2]
    );

    let age = today.getFullYear() - birthDateObj.getFullYear();
    let months = today.getMonth() - birthDateObj.getMonth();

    if (
      months < 0 ||
      (months === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }

    if (months < 0) {
      months += 12;
    }

    if (age === 0) {
      age = months + " meses";
    }

    if (months === 0) {
      months = "";
    }

    return age + " anos e " + months + " meses";
  }
}

class PetsList {
  constructor() {
    this.pets = [];
  }

  addPet(tutor, petName, species, avatar, age) {
    const pet = new Pet(tutor, petName, species, avatar, age);
    console.log(pet);
    this.pets.push(pet);
  }

  getPets() {
    return this.pets;
  }
}

const petsList = new PetsList();

// Função para cadastrar um novo pet
function createPet() {
  const tutor = document.getElementById("tutor").value;
  const petName = document.getElementById("petName").value;
  const species = document.getElementById("species").value;
  const avatar = document.getElementById("avatar").value;
  const age = document.getElementById("age").value;

  petsList.addPet(tutor, petName, species, avatar, age);

  //renderPetsCards();
}

function renderPetsCards() {
  document.getElementById("exibicao").classList.remove("hidden");
  const pets = petsList.getPets();

  let content = "";

  pets.forEach((pet) => {
    content += `
      <div class="card">
        <div class="card-header">
          <img src="${pet.avatar}" alt="${pet.petName}" />
        </div>
        <div class="card-body">
          <h3>${pet.petName}</h3>
          <p>
            <strong>Tutor: </strong>${pet.tutor}
          </p>
          <p>
            <strong>Espécie: </strong>${pet.species}
          </p>
          <p>
            <strong>Idade: </strong>${pet.age}
          </p>
        </div>
      </div>
    `;
  });

  document.getElementById("lista-pets").innerHTML = content;
}

function showList() {
  document.getElementById("exibicao").classList.remove("hidden");
  document.getElementById("cadastro").classList.add("hidden");
}

function showForm() {
  document.getElementById("exibicao").classList.add("hidden");
  document.getElementById("cadastro").classList.remove("hidden");
}
