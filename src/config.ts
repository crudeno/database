type Config = {
  readonly type: 'mongodb' | 'mysql' | 'postgresql' | 'sqlite'
  readonly name: string
  readonly host?: string
  readonly port?: number
  readonly user?: string
  readonly pass?: string
}

export default Config
