export function myBootstrap({ platform, module }) {
  platform()
    .bootstrapModule(module)
    .catch(err => console.log(err));
}
