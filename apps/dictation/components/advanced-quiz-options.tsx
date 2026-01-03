"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@repo/ui/components/ui/popover";
import { Button } from "@repo/ui/components/ui/button";
import { Label } from "@repo/ui/components/ui/label";
import { Input } from "@repo/ui/components/ui/input";
import { Switch } from "@repo/ui/components/ui/switch";
import { QuizParameters } from "../lib/types";

interface AdvancedQuizOptionsProps {
    value: QuizParameters;
    onChange: (value: QuizParameters) => void;
    disabled?: boolean;
}

export function AdvancedQuizOptions({ value, onChange, disabled }: AdvancedQuizOptionsProps) {
    const handleChange = (field: keyof QuizParameters, newValue: number | boolean) => {
        onChange({
            ...value,
            [field]: newValue,
        });
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Advanced Mode</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
                <h2 className="text-lg font-semibold mb-4">Advanced Options</h2>
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="quiz-mode" className="cursor-pointer">Enable Quiz Mode</Label>
                        <Switch
                            id="quiz-mode"
                            checked={value.quizModeEnabled}
                            onCheckedChange={checked => handleChange('quizModeEnabled', checked)}
                            disabled={disabled}
                        />
                    </div>

                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="global-time-limit">Global Time Limit (sec)</Label>
                            <Input
                                id="global-time-limit"
                                type="number"
                                min={0}
                                max={120}
                                value={value.globalTimeLimit}
                                onChange={e => handleChange('globalTimeLimit', parseInt(e.target.value) || 0)}
                                className="mt-1"
                                disabled={disabled}
                            />
                        </div>

                        <div>
                            <Label htmlFor="activity-time-limit">Activity Time Limit (sec)</Label>
                            <Input
                                id="activity-time-limit"
                                type="number"
                                min={0}
                                max={300}
                                value={value.activityTimeLimit}
                                onChange={e => handleChange('activityTimeLimit', parseInt(e.target.value) || 0)}
                                className="mt-1"
                                disabled={disabled}
                            />
                        </div>

                        <div>
                            <Label htmlFor="global-lives-limit">Lives Limit</Label>
                            <Input
                                id="global-lives-limit"
                                type="number"
                                min={1}
                                max={10}
                                value={value.globalLivesLimit}
                                onChange={e => handleChange('globalLivesLimit', parseInt(e.target.value) || 1)}
                                className="mt-1"
                                disabled={disabled}
                            />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
