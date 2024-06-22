import { Detail, Flavor, Role, Status } from "../models/associations.js";

const cleanTables = async () => {
  try {
    await Promise.all([
      Status.destroy({ where: {}, truncate: true }),
      Detail.destroy({ where: {}, truncate: true }),
      Flavor.destroy({ where: {}, truncate: true }),
      Role.destroy({ where: {}, truncate: true }),
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
