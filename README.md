# factor-e-commerce
Ce repository est un test technique réalisé pour un poste de développeur VueJs.

## Back-end

L'API est développé avec le framework Laravel[Laravel](https://laravel.com/docs/11.x) en version 11.

A l'installation du fichier sur votre environnement, il faut une version de PHP minimale 8.2.

Si vous n'avez pas composer sur votre machine : [Composer](https://getcomposer.org/).

Exécuter la commande suivante. Composer est l'équivalent de npm, yarn en JavaScript.

**Toujours se mettre dans le dossier API**

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

### Routes

Pour afficher les routes, vous pouvez exécuter cette commande.
```bash
php artisan route:list
```

Les routes en place dans le projet.

```bash
  GET|HEAD        / ................................................................................................................  
  POST            _ignition/execute-solution ......... ignition.executeSolution › Spatie\LaravelIgnition › ExecuteSolutionController  
  GET|HEAD        _ignition/health-check ..................... ignition.healthCheck › Spatie\LaravelIgnition › HealthCheckController  
  POST            _ignition/update-config .................. ignition.updateConfig › Spatie\LaravelIgnition › UpdateConfigController  
  GET|HEAD        api/cart ....................................................................... cart.index › CartController@index  
  POST            api/cart ....................................................................... cart.store › CartController@store  
  GET|HEAD        api/cart/{cart} .................................................................. cart.show › CartController@show  
  PUT|PATCH       api/cart/{cart} .............................................................. cart.update › CartController@update  
  DELETE          api/cart/{cart} ............................................................ cart.destroy › CartController@destroy  
  GET|HEAD        api/command .............................................................. command.index › CommandController@index  
  POST            api/command .............................................................. command.store › CommandController@store  
  GET|HEAD        api/command/{command} ...................................................... command.show › CommandController@show  
  PUT|PATCH       api/command/{command} .................................................. command.update › CommandController@update  
  DELETE          api/command/{command} ................................................ command.destroy › CommandController@destroy  
  GET|HEAD        api/product .............................................................. product.index › ProductController@index  
  POST            api/product .............................................................. product.store › ProductController@store  
  GET|HEAD        api/product/{product} ...................................................... product.show › ProductController@show  
  PUT|PATCH       api/product/{product} .................................................. product.update › ProductController@update  
  DELETE          api/product/{product} ................................................ product.destroy › ProductController@destroy  
  GET|HEAD        api/user ....................................................................... user.index › UserController@index  
  POST            api/user ....................................................................... user.store › UserController@store  
  GET|HEAD        api/user/{user} .................................................................. user.show › UserController@show  
  PUT|PATCH       api/user/{user} .............................................................. user.update › UserController@update  
  DELETE          api/user/{user} ............................................................ user.destroy › UserController@destroy 
```

### Serveur

Pour lancer le serveur API, exécuter cette commande

```bash
php artisan serve
```

## Front-end