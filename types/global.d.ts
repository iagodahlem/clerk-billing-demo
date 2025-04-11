export {}

declare global {
  interface ClerkAuthorization {
    permission: 'testpermission'
    role: 'testrole'
    __experimental_feature: 'testfeature' | 'testfeature2'
  }
}
