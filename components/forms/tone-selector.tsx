"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ToneSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function ToneSelector({ value, onValueChange }: ToneSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Tone</label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select tone" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem value="professional">Professional 👔</SelectItem>
        <SelectItem value="casual">Casual 👕</SelectItem>
        <SelectItem value="enthusiastic">Enthusiastic 😃</SelectItem>
        <SelectItem value="humorous">Humorous 😂</SelectItem>
        <SelectItem value="formal">Formal 👗</SelectItem>
        <SelectItem value="horny">Horny 😏</SelectItem>

        </SelectContent>
      </Select>
    </div>
  );
}