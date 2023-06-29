module.exports = (sequelize, Sequelize) => {
  const Biodata = sequelize.define("biodata", {
    nama: {
      type: Sequelize.STRING,
    },
    tempatLahir: {
      type: Sequelize.STRING,
    },
    tanggalLahir: {
      type: Sequelize.DATEONLY,
    },
    alamat: {
      type: Sequelize.TEXT,
    },
  });
  return Biodata;
};
