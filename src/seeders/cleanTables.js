import { Client, Detail, Flavor, Status } from "../models/associations.js";
import Admin from "../models/admin/adminModel.js";

const cleanTables = async () => {
  try {
    await Promise.all([
      Client.destroy({ where: {}, truncate: true }),
      Status.destroy({ where: {}, truncate: true }),
      Detail.destroy({ where: {}, truncate: true }),
      Flavor.destroy({ where: {}, truncate: true }),
      Admin.destroy({ where: {}, truncate: true }),
    ]);

    console.log(`
			|------------------------------|
			| Tables cleaned successfully! |
			|------------------------------|
		`);

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  };
};

if (process.argv[2] === '-ct') cleanTables();
