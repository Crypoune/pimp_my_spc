import express from "express";

const router = express.Router();

// Route pour la page d'accueil
router.get("/", (req, res) => {
    res.render("home");
});

// Route pour la page des news
router.get("/news", (req, res) => {
    res.render("news");
});

// Route pour afficher le formulaire de contact
router.get("/contact", (req, res) => {
    res.render("contact", { formData: null, error: null, success: null });
});

export default router;
