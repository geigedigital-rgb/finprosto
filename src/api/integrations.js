// Legacy Base44 stubs — unused after Railway migration.

export const Core = {
  InvokeLLM: async () => { throw new Error('Not available'); },
  SendEmail: async () => { throw new Error('Not available'); },
  UploadFile: async () => { throw new Error('Not available'); },
  GenerateImage: async () => { throw new Error('Not available'); },
  ExtractDataFromUploadedFile: async () => { throw new Error('Not available'); },
};
