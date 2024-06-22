import { hashPassword } from "../../../helpers/index.js";

export const user = [
  {
    name: "Cargotrans",
    address: "Managua, Managua",
    phone: 25253233,
    email: "cargotrans@correo.com",
    password: await hashPassword("cargotrans123"),
    id_role: 1,
  },
  {
    name: "Kevin Reyes",
    address: "Diriamba, Carazo",
    phone: 25253234,
    email: "kevin@correo.com",
    password: await hashPassword("kevin123"),
    id_role: 1,
  },
  {
    name: "Alejandro Velásquez",
    address: "Barrio Roberlo López, costado oeste del campo La salle, Diriamba, Carazo.",
    phone: 77233456,
    email: "alejandro@correo.com",
    password: await hashPassword("alejandro123"),
    id_role: 2,
  },
  {
    name: "Lisbeth Rugama",
    address: "Villa San Ramón, última calle case 23, Diriamba, Carazo.",
    phone: 89893434,
    email: "lisbeth@correo.com",
    password: await hashPassword("lisbeth123"),
    id_role: 2,
  },
];
