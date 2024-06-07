import { hashPassword } from "../../../helpers/index.js";

export const client = [
  {
    name: "Alejandro Velásquez",
    address: "Barrio Roberlo López, costado oeste del campo La salle, Diriamba, Carazo.",
    phone: 77233456,
    email: "alejandro@correo.com",
    password: await hashPassword("alejandro123"),
  },
  {
    name: "Lisbeth Rugama",
    address: "Villa San Ramón, última calle case 23, Diriamba, Carazo.",
    phone: 89893434,
    email: "lisbeth@correo.com",
    password: await hashPassword("lisbeth123"),
  },
];
