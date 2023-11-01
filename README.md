# Twitter Clone

Clon de la aplicación de red social Twitter creado usando Ruby on Rails con fines educativos.

Puedes visitarlo en https://twitterclone24-e179558b15c3.herokuapp.com/

## Descripción

Esta página opera principalmente mediante el uso de un CRUD (Create,Read,Update,Delete) para el manejo de los tweets y su gestión a través de una base de datos utilizando PostgreSQL.

- Crear nuevos tweets que serán almacenados en la base de datos.
- Editar los tweets creados con un solo click.
- Borrar un tweet.
- Mostrar en su índice todos los tweets creados, mostrando siempre los últimos tweets al comienzo.
- Paginación: solo 10 tweets se cargarán a la vez para un mejor manejo y experiencia.
- Barra de búsqueda: ¿Estás buscando un tweet en particular o un usuario? Ahora puedes hacerlo, y en caso de que todo falle, aún podrás revisar por ID, todo esto en una simple barra de búsqueda.
- Contador de palabras: como en las antiguas versiones de esta red social, pero no te preocupes, tienes 500 caracteres para poder expresar tus pensamientos.

## Empezando

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local con fines de desarrollo y pruebas.

### Prerrequisitos

- Sistema Operativo: Windows, Ubuntu o macOS
- Lenguaje de programación: Ruby 3.2.2
- Framework Rails: 7.0.6
- PostgreSQL: 14.8

### Instalación

Clona el repositorio con el siguiente comando:

```bash
git clone https://github.com/ksavir/twitter_clone_rails
```

En la terminal, accede a la carpeta donde se encuentra el repositorio y ejecuta (recuerda que para que esto funcione, debes tener instalado Ruby y la gema bundle):

```bash
bundle install
```

Inicia la base de datos con el siguiente comando:

```bash
rails db:create db:migrate
```

Finalmente, ejecuta el proyecto con el siguiente comando y ve a la dirección IP que aparecerá en la consola:

```bash
rails s
```

## Despliegue

Instrucciones para desplegar en Heroku:

asegurate de tener instalado [heroku](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)

1: En la terminal, inicia sesión en Heroku:

```bash
heroku login
```

2: Crea una aplicación en Heroku:

```bash
heroku create
```

- Es importante copiar el nombre de la aplicación proporcionado por Heroku, ya que se utilizará en el siguiente paso. Por ejemplo: kevin-savir-080122.

3: Ahora conectaremos el proyecto con nuestra aplicación en Heroku:

```bash
heroku git:remote -a nombre-proyecto-dado_por_heroku
```

4: Realiza un push a Heroku:

```bash
git push heroku main
```

Importante:

Recuerda que Heroku utiliza Git, así que en tu proyecto debes haber iniciado Git. Si clonaste este repositorio, asegúrate de tener la carpeta .git; de lo contrario, realiza los siguientes pasos:

- Inicia el repositorio, agrega los cambios y realiza un primer commit:

```bash
git init
git add .
git commit -m "escribe un mensaje"
```

Si realizaste todo correctamente, ahora podrás agregar el remote mencionado en el paso 3 y seguir con el paso 4.

5a: Debes ir a la página de tu aplicación en la web de [heroku](https://id.heroku.com/login) y dirigirte a la pestaña de la derecha que dice "More":

![More](/public/heroku.png)

5b: Una vez que se despliegue el menú, selecciona la opción "Run console".

6: Una vez que se despliegue la consola, asegúrate de crear la base de datos si aún no está creada, migrar los cambios y, si lo deseas, generar los datos que contiene el archivo seed.rb:

```bash
rails db:create
rails db:migrate
rails db:seed
```

Si seguiste los pasos hasta aquí, deberías poder ver en tu aplicación, en la vista de índice, algunos tweets creados con la gema Faker.

![vista principal](/public/index.png)

## Construido Con

- [Ruby](https://www.ruby-lang.org/es/) - El lenguaje utilizado
- [Ruby on Rails](https://rubyonrails.org) - El framework web utilizado
- [Ruby gems](https://rubygems.org) - Gestión de dependencias
- [Postgresql](https://www.postgresql.org) - Sistema de base de datos
- [Bootstrap](https://getbootstrap.com/) - Framework de CSS
- [Pagy](https://ddnexus.github.io/pagy/) - Gema para paginación.
- [Pg_search](https://github.com/Casecommons/pg_search) - Gema para barra de búsqueda

## Versionado

Se usa [Git](https://git-scm.com) para el versionado.

## Desarrollado por

- **Kevin Rivas** Encuéntrame en [github](https://github.com/ksavir)
