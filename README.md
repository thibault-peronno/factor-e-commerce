# factor-e-commerce
Ce repository est un test technique réalisé pour un poste de développeur VueJs.

## Back-end

L'API est développé avec le framework Laravel[Laravel](https://laravel.com/docs/11.x) en version 11.

A l'installation du fichier sur votre environnement, il faut une version de PHP minimale 8.2.

Si vous n'avez pas composer sur votre machine : [Composer](https://getcomposer.org/).

Exécuter la commande suivante. Composer est l'équivalent de npm, yarn en JavaScript.

```bash
composer install
```

### Migration

Avant d'exécuter les migrations mise en place sur le projet, vous devez créer votre base de données.

Copier-coller le fichier ```.env.example``` et le nommer en ```.env.``` Ce fichier est dans le ```.gitignore``` par sécurité. Il ne sera pas poussé sur votre logiciel de versionnages (GitHub, GitLab, etc).

Configurez votre connexion à votre base de données.

## Front-end