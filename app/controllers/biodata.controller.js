const db = require("../models");
const Biodata = db.biodatas;

// CREATE: untuk enambahkan data kedalam tabel biodata
exports.create = (req, res) => {
  // data yang didapatkan dari inputan oleh pengguna
  const biodata = {
    nama: req.body.nama,
    tempatLahir: req.body.tempatLahir,
    tanggalLahir: req.body.tanggalLahir,
    alamat: req.body.alamat,
  };

  // proses menyimpan kedalam database
  Biodata.create(biodata)
    .then((data) => {
      res.json({
        message: "Biodata created successfully.",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the Biodata.",
        data: null,
      });
    });
};

// READ: menampilkan atau mengambil semua data sesuai model dari database
exports.findAll = (req, res) => {
  Biodata.findAll()
    .then((biodatas) => {
      res.json({
        message: "Biodatas retrieved successfully.",
        data: biodatas,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving books.",
        data: null,
      });
    });
};

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params
exports.update = (req, res) => {
  const id = req.params.id;
  Biodata.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Biodata updated successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot update Biodata with id=${id}. Maybe Biodata was not found or req.body is empty!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while updating the book.",
        data: null,
      });
    });
};

// DELETE: Menghapus data sesuai id yang dikirimkan
exports.delete = (req, res) => {
  const id = req.params.id;
  Biodata.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Biodata deleted successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot delete biodata with id=${id}. Maybe biodata was not found!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while deleting the book.",
        data: null,
      });
    });
};

// BONUS ===> Mengambil data sesuai id yang dikirimkan
exports.findOne = (req, res) => {
  biodata
    .findByPk(req.params.id)
    .then((biodata) => {
      res.json({
        message: "Book retrieved successfully.",
        data: biodata,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving book.",
        data: null,
      });
    });
};
