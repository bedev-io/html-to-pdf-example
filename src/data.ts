export default {
  invoice: {
    sequenceFormatted: "INV-2023-001",
    name: "Web Development Services",
    specialMention: "Thank you for your business!"
  },
  sentAt: "2023-10-01",
  dueAt: "2023-10-15",
  isBankTransfer: true,
  accountLogo: {
    uri: "https://cdn.pixabay.com/photo/2017/01/13/01/22/rocket-1976107_1280.png"
  },
  account: {
    name: "Your Company Name",
    vatNumber: "FR123456789",
    invoiceEmail: "invoice@example.com",
    invoicePhone: "+1234567890"
  },
  sellerAddressStreet: "123 Main St",
  sellerAddressCity: "Paris",
  sellerAddressCountry: "France",
  customer: {
    name: "Customer Name",
    vatNumber: "DE987654321",
    invoiceContactName: "John Doe",
    invoiceContactEmail: "john.doe@example.com",
    invoiceContactPhone: "+0987654321"
  },
  invoiceItems: [
    {
      denomination: "Service A",
      description: "Description of Service A",
      quantity: 1,
      unitPrice: "100.00",
      excludedVatAmount: "100.00",
      vatPercentage: 20
    },
    {
      denomination: "Service B",
      description: "Description of Service B",
      quantity: 2,
      unitPrice: "50.00",
      excludedVatAmount: "100.00",
      vatPercentage: 20
    }
  ],
  totalExcludedVatAmount: "200.00",
  totalVatByPercentage: [
    {
      vatPercentage: 20,
      formattedVatAmount: "40.00"
    }
  ],
  totalAllTaxesIncluded: "240.00",
  paymentCondition: {
    description: "Payment is due within 15 days."
  },
  paymentMethod: {
    bankAccountNumber: "FR7612345678901234567890123"
  }
};
