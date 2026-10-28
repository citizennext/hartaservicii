import { useId } from 'react';
import filterLabels from '../../data/filter-options.json';
import type { FilterOptions, MapFilters as Filters } from '../../lib/filters';

interface MapFiltersProps {
  filters: Filters;
  options: FilterOptions;
  total: number;
  onChange: (patch: Partial<Filters>) => void;
}

interface SelectProps {
  label: string;
  value: string;
  choices: readonly { value: string; label: string }[];
  disabled?: boolean;
  onChange: (value: string) => void;
}

const ALL = '';
const toChoices = (values: readonly string[], allLabel: string) => [
  { value: ALL, label: allLabel },
  ...values.map((value) => ({ value, label: value })),
];
const orNull = (value: string): string | null => (value === ALL ? null : value);

function Select({ label, value, choices, disabled = false, onChange }: SelectProps) {
  const id = useId();
  return (
    <div className="select-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)}>
        {choices.map((choice) => (
          <option key={choice.value} value={choice.value}>
            {choice.label}
          </option>
        ))}
      </select>
    </div>
  );
}

const AGE_CHOICES = filterLabels.age.map(({ value, label }) => ({ value: value ?? ALL, label }));
const ADMINISTRATOR_CHOICES = filterLabels.administrator.map(({ value, label }) => ({
  value: value === null ? ALL : String(value),
  label,
}));

export function MapFilters({ filters, options, total, onChange }: MapFiltersProps) {
  return (
    <div className="select-options">
      <Select
        label="Județ"
        value={filters.district ?? ALL}
        choices={toChoices(options.districts, 'Toate județele')}
        onChange={(value) => onChange({ district: orNull(value) })}
      />
      <Select
        label="Beneficiari"
        value={filters.category ?? ALL}
        choices={AGE_CHOICES}
        onChange={(value) => onChange({ category: orNull(value) })}
      />
      <Select
        label="Tip servicii sociale"
        value={filters.service ?? ALL}
        choices={toChoices(options.services, 'Toate serviciile')}
        onChange={(value) => onChange({ service: orNull(value), specialization: null })}
      />
      <Select
        label="Tip specializare"
        value={filters.specialization ?? ALL}
        choices={toChoices(options.specializations, 'Toate specializările')}
        disabled={filters.service === null}
        onChange={(value) => onChange({ specialization: orNull(value) })}
      />
      <Select
        label="Administrator"
        value={filters.administrator === null ? ALL : String(filters.administrator)}
        choices={ADMINISTRATOR_CHOICES}
        onChange={(value) => onChange({ administrator: value === ALL ? null : value === 'true' })}
      />
      <div className="pin-number select-container" aria-live="polite">
        <label>Total centre</label>
        {total}
      </div>
    </div>
  );
}
