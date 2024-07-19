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

Exemple d'un script sql 
```sql
DROP DATABASE IF EXISTS `factor`;
DROP USER IF EXISTS 'factor'@'localhost';

CREATE DATABASE IF NOT EXISTS factor CHARACTER SET UTF8;
USE factor;

CREATE USER IF NOT EXISTS 'factor'@'localhost' IDENTIFIED BY 'factor';
GRANT ALL PRIVILEGES ON factor.* TO 'factor'@'localhost';
```

Créer la base de données avec le script ci-dessus

Pour exécuter toutes vos migrations, exécutez la migrate commande Artisan :

```sql
php artisan migrate
```

#### Forcer les migrations à s'exécuter en production

```sql
php artisan migrate --force
```

Plus d'information sur la documentation de [Laravel Migration](https://laravel.com/docs/7.x/migrations)

### Seeder : Faker data

Le projet contient un processus mis en place avec faker avant de générer des données de test automatiquement.

Pour cela il faut effectuer la commande suivante. Vérifier que votre base de données est en place.

Par défaut la commande exécute le fichier DatabaseSeeeder.php

```bash
php artisan db:seed
```

Si vous avez utilisé la commande de migration pour créer vos tables, vous avez aussi la commande ci-dessous. Elle permet de supprimer et de refaire votre BDD en mettant les fausses données

```bash
php artisan migrate:fresh --seed
```

## Front-end