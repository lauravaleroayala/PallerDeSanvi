# El paller de Sant Vicente de Piedrahita

Landing page senzilla, responsive i sense dependències de JavaScript externes. Pensada per editar-la amb Visual Studio Code i publicar-la a GitHub Pages.

## Estructura

- `index.html`: contingut i targetes dels objectes.
- `styles.css`: colors, tipografia i distribució visual.
- `script.js`: filtres de categories.
- `imatges/`: deseu aquí les fotografies.
- `audio/`: deseu aquí els enregistraments d'Antonio.

## Com veure-la a Visual Studio Code

1. Descomprimiu la carpeta.
2. Obriu la carpeta `paller_sant_vicente` amb Visual Studio Code.
3. Obriu `index.html` al navegador. També podeu instal·lar l'extensió **Live Server** i prémer `Go Live`.

## Com afegir una fotografia

Per exemple, deseu una imatge com `imatges/paller.jpg`. A `index.html`, busqueu el bloc de marcador de posició del paller i substituïu-lo per:

```html
<img class="hero-image" src="imatges/paller.jpg" alt="L'interior del paller d'Antonio">
```

Per a una targeta d'objecte, substituïu el bloc `<div class="object-image image-placeholder"> ... </div>` per:

```html
<div class="object-image">
  <img src="imatges/nom-de-l-objecte.jpg" alt="Descripció de l'objecte">
</div>
```

Feu el mateix amb les imatges `imatges/poble.jpg` i `imatges/escut.jpg` a la secció del poble. Ajusteu els textos alternatius (`alt`) per descriure les fotografies.

## Com afegir un àudio d'Antonio

1. Deseu l'enregistrament en format MP3 dins de `audio/`, per exemple `audio/gerra.mp3`.
2. A la targeta corresponent, traieu els comentaris HTML del reproductor i canvieu el nom del fitxer:

```html
<audio controls preload="none">
  <source src="audio/gerra.mp3" type="audio/mpeg">
  El navegador no pot reproduir aquest àudio.
</audio>
```

`preload="none"` evita que els àudios es carreguin abans que la persona decideixi escoltar-los.

## Com afegir un objecte nou

Copieu un bloc complet `<article class="object-card" ...> ... </article>` dins de `#object-grid`. Actualitzeu:
- `data-category` amb una d'aquestes categories: `La casa`, `Les feines`, `Música i festes` o `Vida al poble`.
- El nom, la descripció i el record.
- La ruta de la imatge i, si en teniu, la de l'àudio.

Si afegiu una categoria nova, afegiu també un botó de filtre a `index.html` amb el mateix text a `data-filter`.

## Publicar-la a GitHub Pages

1. Creeu un repositori nou a GitHub, per exemple `el-paller`.
2. Pugeu-hi `index.html`, `styles.css`, `script.js`, `README.md` i les carpetes `imatges` i `audio`.
3. Al repositori, aneu a **Settings → Pages**.
4. A *Build and deployment*, seleccioneu **Deploy from a branch**, trieu `main` i `/ (root)`, i deseu.
5. GitHub us mostrarà l'adreça pública quan el lloc estigui publicat.

**Consell:** comenceu amb unes 4–8 peces ben documentades. És millor explicar bé cada objecte que omplir la pàgina massa de pressa. Demaneu permís a les persones que hi surtin a les fotografies i conserveu còpies dels àudios originals.
