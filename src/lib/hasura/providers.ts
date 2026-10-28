import { z } from 'zod';
import type { MapProvider } from '../filters';
import type { StatsProvider } from '../statistics';
import type { HasuraClient } from './client';

// Hasura auto-named the relationships `public_*`; alias them back to stable names here.
const PROVIDERS_QUERY = /* GraphQL */ `
  query Providers {
    providers(order_by: { name: asc }) {
      id
      name
      coordinates
      address
      location
      district
      capacity
      email
      phone
      updatedAt
      license_by
      license_date_5years
      license_date_provisional
      license_no
      phones: public_phones {
        number
      }
      supplier: public_supplier {
        name
        cui_cif
        certificate_serial_no
        decision_date
        decision_no
        supplier_type: public_supplier_type {
          name
          private
        }
      }
      service: public_service {
        name
        code
        category: public_category {
          name
        }
        service_offers: public_service_offers {
          offer: public_offer {
            id
            name
          }
        }
      }
    }
  }
`;

const SUPPLIERS_QUERY = /* GraphQL */ `
  query Suppliers {
    suppliers {
      supplier_type: public_supplier_type {
        private
      }
    }
  }
`;

const PROVIDER_SCHEMA = z.object({
  id: z.string(),
  name: z.string().trim(),
  coordinates: z.tuple([z.number(), z.number()]),
  address: z.string(),
  location: z.string(),
  district: z.string(),
  capacity: z.string().nullable(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  updatedAt: z.string(),
  license_by: z.string().nullable(),
  license_date_5years: z.string().nullable(),
  license_date_provisional: z.string().nullable(),
  license_no: z.string().nullable(),
  phones: z.array(z.object({ number: z.string() })),
  supplier: z.object({
    name: z.string(),
    cui_cif: z.string().nullable(),
    certificate_serial_no: z.string().nullable(),
    decision_date: z.string().nullable(),
    decision_no: z.string().nullable(),
    supplier_type: z.object({ name: z.string(), private: z.boolean() }),
  }),
  service: z.object({
    name: z.string(),
    code: z.string().nullable(),
    category: z.object({ name: z.string() }),
    service_offers: z.array(z.object({ offer: z.object({ id: z.string(), name: z.string() }) })),
  }),
});

export const PROVIDERS_RESPONSE_SCHEMA = z.object({ providers: z.array(PROVIDER_SCHEMA) });

const SUPPLIERS_RESPONSE_SCHEMA = z.object({
  suppliers: z.array(z.object({ supplier_type: z.object({ private: z.boolean() }).nullable() })),
});

export type Provider = z.infer<typeof PROVIDER_SCHEMA>;

export interface SupplierSummary {
  isPrivate: boolean;
}

export async function fetchProviders(client: HasuraClient): Promise<Provider[]> {
  const { providers } = await client.request(PROVIDERS_QUERY, PROVIDERS_RESPONSE_SCHEMA);
  return providers;
}

export async function fetchSuppliers(client: HasuraClient): Promise<SupplierSummary[]> {
  const { suppliers } = await client.request(SUPPLIERS_QUERY, SUPPLIERS_RESPONSE_SCHEMA);
  return suppliers.flatMap(({ supplier_type }) => (supplier_type ? [{ isPrivate: supplier_type.private }] : []));
}

export function toMapProvider(provider: Provider): MapProvider {
  return {
    id: provider.id,
    name: provider.name,
    coordinates: provider.coordinates,
    district: provider.district,
    categoryName: provider.service.category.name,
    serviceName: provider.service.name,
    isPrivate: provider.supplier.supplier_type.private,
  };
}

export function toStatsProvider(provider: Provider): StatsProvider {
  return {
    district: provider.district,
    capacity: provider.capacity,
    categoryName: provider.service.category.name,
    isPrivate: provider.supplier.supplier_type.private,
  };
}
