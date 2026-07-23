# HRM Fitness v2

Aplicación web progresiva para registrar rutinas, series, notas, temporizador de descanso y fotos privadas de progreso.

## Publicar en GitHub Pages
1. Reemplaza los archivos del repositorio por el contenido de esta carpeta.
2. Haz commit de los cambios.
3. En Settings > Pages, publica desde la rama `main` y la carpeta `/root`.

## Importante
- Mantiene los datos anteriores guardados con las claves `hrmRoutines`, `hrmWorkouts`, `hrmWeights` y `hrmSettings`.
- Las fotos se guardan localmente en IndexedDB y no se suben a internet.
- El temporizador usa una hora final real, por lo que al volver a la app muestra el tiempo correcto. iOS puede impedir que una web ejecute código continuamente cuando está cerrada; las notificaciones dependen del permiso y de que la PWA esté instalada.


## Versión 2.1
- Selector de ejercicios agrupado visualmente por grupo muscular.
- Buscador y filtros horizontales.
- Mejor actualización del caché para GitHub Pages.


## Versión 2.2
- Permite eliminar rutinas antiguas desde Inicio.
- Solicita confirmación antes de borrar.
- El historial de entrenamientos no se elimina al borrar una rutina.
