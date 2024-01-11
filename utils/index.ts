export {}

export function injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
  const resolved = inject(key, fallback)
  if (!resolved) {
    console.error(`Could not resolve ${key.description}`)
  }
  return resolved
}
