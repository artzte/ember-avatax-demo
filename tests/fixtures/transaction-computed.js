export default {
  "id": 22805121,
  "code": "2e7018dd-1df1-43cd-9a8a-289c2eb8a6b7",
  "companyId": 1,
  "date": "2016-11-13T00:00:00",
  "taxDate": "2016-11-13T00:00:00",
  "paymentDate": "1900-01-01T00:00:00",
  "status": "Saved",
  "type": "SalesInvoice",
  "batchCode": "",
  "currencyCode": "USD",
  "customerUsageType": "",
  "customerVendorCode": "Smeagol",
  "exemptNo": "",
  "reconciled": false,
  "purchaseOrderNo": "",
  "salespersonCode": "",
  "taxOverrideType": "None",
  "taxOverrideAmount": 0,
  "taxOverrideReason": "",
  "totalAmount": 100,
  "totalExempt": 0,
  "totalTax": 9.6,
  "totalTaxable": 100,
  "totalTaxCalculated": 9.6,
  "adjustmentReason": "NotAdjusted",
  "adjustmentDescription": "",
  "locked": false,
  "region": "WA",
  "country": "US",
  "version": 1,
  "softwareVersion": "16.8.3.4",
  "originAddressId": 37961685,
  "destinationAddressId": 37961685,
  "exchangeRateEffectiveDate": "2016-11-13T00:00:00",
  "exchangeRate": 1,
  "isSellerImporterOfRecord": false,
  "modifiedDate": "2016-11-14T03:38:33.02",
  "modifiedUserId": 286069,
  "lines": [
    {
      "id": 31336071,
      "transactionId": 22805121,
      "lineNumber": "1",
      "boundaryOverrideId": 0,
      "customerUsageType": "",
      "description": "",
      "destinationAddressId": 37961685,
      "originAddressId": 37961685,
      "discountAmount": 0,
      "exemptAmount": 0,
      "exemptCertId": 0,
      "exemptNo": "",
      "isItemTaxable": true,
      "isSSTP": true,
      "itemCode": "",
      "lineAmount": 100,
      "quantity": 1,
      "ref1": "",
      "ref2": "",
      "reportingDate": "2016-11-13T00:00:00",
      "revAccount": "",
      "sourcing": "Destination",
      "tax": 9.6,
      "taxableAmount": 100,
      "taxCalculated": 9.6,
      "taxCode": "",
      "taxCodeId": 4316,
      "taxDate": "2016-11-13T00:00:00",
      "taxEngine": "",
      "taxOverrideType": "None",
      "taxOverrideAmount": 0,
      "taxOverrideReason": "",
      "taxIncluded": false,
      "details": [
        {
          "id": 48297143,
          "transactionLineId": 31336071,
          "transactionId": 22805121,
          "addressId": 37961685,
          "country": "US",
          "region": "WA",
          "stateFIPS": "53",
          "exemptAmount": 0,
          "exemptReasonId": 4,
          "inState": true,
          "jurisCode": "53",
          "jurisName": "WASHINGTON",
          "jurisdictionId": 61,
          "signatureCode": "BVPJ",
          "stateAssignedNo": "",
          "jurisType": "STA",
          "nonTaxableAmount": 0,
          "nonTaxableRuleId": 0,
          "nonTaxableType": "RateRule",
          "rate": 0.065,
          "rateRuleId": 1099760,
          "rateSourceId": 3,
          "serCode": "01726",
          "sourcing": "Destination",
          "tax": 6.5,
          "taxableAmount": 100,
          "taxType": "Sales",
          "taxName": "WA STATE TAX",
          "taxAuthorityTypeId": 45,
          "taxRegionId": 2109700,
          "taxCalculated": 6.5,
          "taxOverride": 0,
          "rateType": "General",
          "taxableUnits": 100,
          "nonTaxableUnits": 0,
          "exemptUnits": 0,
          "unitOfBasis": "PerCurrencyUnit"
        },
        {
          "id": 48297144,
          "transactionLineId": 31336071,
          "transactionId": 22805121,
          "addressId": 37961685,
          "country": "US",
          "region": "WA",
          "stateFIPS": "53",
          "exemptAmount": 0,
          "exemptReasonId": 4,
          "inState": true,
          "jurisCode": "033",
          "jurisName": "KING",
          "jurisdictionId": 2986,
          "signatureCode": "BVVZ",
          "stateAssignedNo": "1700",
          "jurisType": "CTY",
          "nonTaxableAmount": 0,
          "nonTaxableRuleId": 0,
          "nonTaxableType": "RateRule",
          "rate": 0,
          "rateRuleId": 1098909,
          "rateSourceId": 3,
          "serCode": "01726",
          "sourcing": "Destination",
          "tax": 0,
          "taxableAmount": 100,
          "taxType": "Sales",
          "taxName": "WA COUNTY TAX",
          "taxAuthorityTypeId": 45,
          "taxRegionId": 2109700,
          "taxCalculated": 0,
          "taxOverride": 0,
          "rateType": "General",
          "taxableUnits": 100,
          "nonTaxableUnits": 0,
          "exemptUnits": 0,
          "unitOfBasis": "PerCurrencyUnit"
        },
        {
          "id": 48297145,
          "transactionLineId": 31336071,
          "transactionId": 22805121,
          "addressId": 37961685,
          "country": "US",
          "region": "WA",
          "stateFIPS": "53",
          "exemptAmount": 0,
          "exemptReasonId": 4,
          "inState": true,
          "jurisCode": "63000",
          "jurisName": "SEATTLE",
          "jurisdictionId": 167796,
          "signatureCode": "BVXK",
          "stateAssignedNo": "1726",
          "jurisType": "CIT",
          "nonTaxableAmount": 0,
          "nonTaxableRuleId": 0,
          "nonTaxableType": "RateRule",
          "rate": 0.031,
          "rateRuleId": 1290133,
          "rateSourceId": 3,
          "serCode": "01726",
          "sourcing": "Destination",
          "tax": 3.1,
          "taxableAmount": 100,
          "taxType": "Sales",
          "taxName": "WA CITY TAX",
          "taxAuthorityTypeId": 45,
          "taxRegionId": 2109700,
          "taxCalculated": 3.1,
          "taxOverride": 0,
          "rateType": "General",
          "taxableUnits": 100,
          "nonTaxableUnits": 0,
          "exemptUnits": 0,
          "unitOfBasis": "PerCurrencyUnit"
        }
      ],
      "parameters": {}
    }
  ],
  "addresses": [
    {
      "id": 37961685,
      "transactionId": 22805121,
      "boundaryLevel": "Address",
      "line1": "1100 3RD Ave",
      "line2": "",
      "line3": "",
      "city": "Seattle",
      "region": "WA",
      "postalCode": "98101-2904",
      "country": "US",
      "taxRegionId": 2109700
    }
  ],
  "summary": [
    {
      "country": "US",
      "region": "WA",
      "jurisType": "State",
      "jurisCode": "53",
      "jurisName": "WASHINGTON",
      "taxAuthorityType": 45,
      "stateAssignedNo": "",
      "taxType": "Sales",
      "taxName": "WA STATE TAX",
      "rateType": "General",
      "taxable": 100,
      "rate": 0.065,
      "tax": 6.5,
      "taxCalculated": 6.5,
      "nonTaxable": 0,
      "exemption": 0
    },
    {
      "country": "US",
      "region": "WA",
      "jurisType": "County",
      "jurisCode": "033",
      "jurisName": "KING",
      "taxAuthorityType": 45,
      "stateAssignedNo": "1700",
      "taxType": "Sales",
      "taxName": "WA COUNTY TAX",
      "rateType": "General",
      "taxable": 100,
      "rate": 0,
      "tax": 0,
      "taxCalculated": 0,
      "nonTaxable": 0,
      "exemption": 0
    },
    {
      "country": "US",
      "region": "WA",
      "jurisType": "City",
      "jurisCode": "63000",
      "jurisName": "SEATTLE",
      "taxAuthorityType": 45,
      "stateAssignedNo": "1726",
      "taxType": "Sales",
      "taxName": "WA CITY TAX",
      "rateType": "General",
      "taxable": 100,
      "rate": 0.031,
      "tax": 3.1,
      "taxCalculated": 3.1,
      "nonTaxable": 0,
      "exemption": 0
    }
  ],
  "parameters": {}
};