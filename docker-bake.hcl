group "default" {
  targets = ["app"] # Default group will only build the app
}

target "app" {
  context = "."
  dockerfile = "Dockerfile"
  ports = [
    "5000:5000",
    "5555:5555"
  ]
  stdin = true
  tty = true
  env = [
    "env_file=.env.prod"
  ]
  mounts = [
    "type=volume,source=node_modules,target=/app/node_modules"
  ]
  output = [
    "type=docker,name=app:latest"
  ]
}