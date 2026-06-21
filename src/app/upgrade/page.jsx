"use client";

import { useState } from "react";
import { Tabs, Input, Button, Card } from "@heroui/react";
import Link from "next/link";

export default function Page() {
    const [billingCycle, setBillingCycle] = useState("monthly");
    const [paymentData, setPaymentData] = useState({
        cardholderName: "",
        cardNumber: "",
        expiryDate: "",
        cvc: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Process payment integration here
    };

    return (
        <div className="min-h-screen bg-slate-50/50 px-4 py-12 font-sans antialiased sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">

                {/* Main Page Header */}
                <div className="mb-10 text-left">
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Upgrade to Founder Pro
                    </h1>
                    <p className="mt-2.5 text-sm font-medium text-slate-500">
                        Unlock the full power of StartupForge. Build, scale, and collaborate with the industry's most advanced toolset.
                    </p>
                </div>

                {/* Content Columns Layout */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

                    {/* Left Column: Plan Information */}
                    <div className="space-y-6 lg:col-span-5">

                        {/* Billing Cycle Selector */}
                        <Card className="border border-slate-200/60 bg-white shadow-none" radius="lg">
                            <Card.Content className="p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[10px] font-black tracking-wider text-slate-400 uppercase">
                                        Billing Cycle
                                    </span>
                                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600 border border-emerald-100">
                                        SAVE 20%
                                    </span>
                                </div>
                                <Tabs
                                    fullWidth
                                    size="md"
                                    aria-label="Billing options"
                                    selectedKey={billingCycle}
                                    onSelectionChange={setBillingCycle}
                                    variant="bordered"
                                    classNames={{
                                        tabList: "border-slate-200 bg-slate-50/50",
                                        cursor: "bg-white border border-slate-200 shadow-sm",
                                        tab: "font-semibold text-xs text-slate-600 data-[selected=true]:text-slate-900",
                                    }}
                                >
                                    <Tabs.ListContainer>
                                        <Tabs.List>
                                            <Tabs.Tab href="#monthly" >
                                                Monthly
                                            </Tabs.Tab>
                                            <Tabs.Tab id="annual" >
                                                Annual
                                            </Tabs.Tab>
                                        </Tabs.List>
                                    </Tabs.ListContainer>
                                </Tabs>
                            </Card.Content>
                        </Card>

                        {/* Founder Pro Tier Specifications */}
                        <Card id="monthly" className="border-0 bg-[#0e172c] text-white shadow-none" radius="lg">
                            <Card.Content className="p-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold tracking-tight">Founder Pro</h2>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-3xl font-black text-orange-400">$49</span>
                                        <span className="text-xs text-slate-400 font-medium">/mo</span>
                                        <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Billed monthly</p>
                                    </div>
                                </div>

                                {/* Features Checklist */}
                                <ul className="mt-8 space-y-4 text-xs font-semibold text-slate-200">
                                    <li className="flex items-center gap-3">
                                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                                            <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        Unlimited Startup Opportunities
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                                            <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        Priority Candidate Matching
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                                            <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        Advanced Team Analytics
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                                            <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        Dedicated Support Manager
                                    </li>
                                </ul>

                                {/* Assurance Notice Panel */}
                                <div className="mt-8 flex items-start gap-3 rounded-xl bg-slate-900/40 border border-slate-800 p-3.5">
                                    <span className="text-orange-400/80 mt-0.5">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </span>
                                    <div>
                                        <h4 className="text-xs font-bold text-white">30-Day Money Back Guarantee</h4>
                                        <p className="text-[10px] text-slate-400 mt-0.5 font-medium">No questions asked refund policy.</p>
                                    </div>
                                </div>
                            </Card.Content>
                        </Card>

                        {/* Compliance Certifications Area */}
                        <div className="grid grid-cols-2 gap-4">
                            <Card className="border border-slate-200/60 bg-white shadow-none" radius="lg">
                                <Card.Content className="flex flex-col items-center justify-center p-3 text-center">
                                    <span className="text-emerald-600 mb-1">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">SSL Encrypted</span>
                                </Card.Content>
                            </Card>

                            <Card className="border border-slate-200/60 bg-white shadow-none" radius="lg">
                                <Card.Content className="flex flex-col items-center justify-center p-3 text-center">
                                    <span className="text-indigo-600 mb-1">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </span>
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">PCI Compliant</span>
                                </Card.Content>
                            </Card>
                        </div>
                    </div>

                    {/* Right Column: Checkout Transaction Form */}
                    <div className="lg:col-span-7">
                        <Card className="border border-slate-200/60 bg-white shadow-none" radius="lg">
                            <Card.Content className="p-6 sm:p-8">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Payment Details</h3>
                                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                                        Complete your purchase by providing your payment information.
                                    </p>
                                </div>

                                <form onSubmit={handleFormSubmit} className="mt-6 space-y-5">
                                    <Input
                                        type="text"
                                        name="cardholderName"
                                        label="Cardholder Name"
                                        labelPlacement="outside"
                                        placeholder="Enter full name"
                                        value={paymentData.cardholderName}
                                        onChange={handleInputChange}
                                        variant="bordered"
                                        radius="md"
                                        isRequired
                                        classNames={{
                                            label: "text-xs font-bold text-slate-700 pb-1",
                                            inputWrapper: "border-slate-200 bg-white hover:border-slate-300 focus-within:!border-orange-500 h-10 min-h-10",
                                            input: "text-sm text-slate-900 placeholder:text-slate-400",
                                        }}
                                    />

                                    <Input
                                        type="text"
                                        name="cardNumber"
                                        label="Card Number"
                                        labelPlacement="outside"
                                        placeholder="0000 0000 0000 0000"
                                        value={paymentData.cardNumber}
                                        onChange={handleInputChange}
                                        variant="bordered"
                                        radius="md"
                                        isRequired
                                        // endContent={
                                        //   <div className="flex gap-1 items-center opacity-40 grayscale select-none">
                                        //     <span className="text-[10px] border border-slate-300 px-1 rounded font-bold">VISA</span>
                                        //     <span className="text-[10px] border border-slate-300 px-1 rounded font-bold">MC</span>
                                        //   </div>
                                        // }
                                        classNames={{
                                            label: "text-xs font-bold text-slate-700 pb-1",
                                            inputWrapper: "border-slate-200 bg-white hover:border-slate-300 focus-within:!border-orange-500 h-10 min-h-10",
                                            input: "text-sm text-slate-900 placeholder:text-slate-400",
                                        }}
                                    />

                                    <div className="grid grid-cols-2 gap-4">
                                        <Input
                                            type="text"
                                            name="expiryDate"
                                            label="Expiry Date"
                                            labelPlacement="outside"
                                            placeholder="MM/YY"
                                            value={paymentData.expiryDate}
                                            onChange={handleInputChange}
                                            variant="bordered"
                                            radius="md"
                                            isRequired
                                            classNames={{
                                                label: "text-xs font-bold text-slate-700 pb-1",
                                                inputWrapper: "border-slate-200 bg-white hover:border-slate-300 focus-within:!border-orange-500 h-10 min-h-10",
                                                input: "text-sm text-slate-900 placeholder:text-slate-400",
                                            }}
                                        />

                                        <Input
                                            type="text"
                                            name="cvc"
                                            label="CVC"
                                            labelPlacement="outside"
                                            placeholder="123"
                                            value={paymentData.cvc}
                                            onChange={handleInputChange}
                                            variant="bordered"
                                            radius="md"
                                            isRequired
                                            //   endContent={
                                            //     <span className="text-slate-400 cursor-help">
                                            //       <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            //         <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            //       </svg>
                                            //     </span>
                                            //   }
                                            classNames={{
                                                label: "text-xs font-bold text-slate-700 pb-1",
                                                inputWrapper: "border-slate-200 bg-white hover:border-slate-300 focus-within:!border-orange-500 h-10 min-h-10",
                                                input: "text-sm text-slate-900 placeholder:text-slate-400",
                                            }}
                                        />
                                    </div>

                                    {/* Operational Legal Note */}
                                    <div className="flex gap-2 text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-100 p-3 rounded-xl">
                                        <span className="text-orange-500 shrink-0 mt-0.5">
                                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </span>
                                        <p>Applicable taxes will be calculated at checkout based on your region.</p>
                                    </div>

                                    {/* Submission Interaction Button */}
                                    <div className="pt-2">
                                        <Button
                                            type="submit"
                                            className="w-full bg-orange-500 text-white font-bold text-sm h-11 shadow-sm shadow-orange-500/10"
                                            radius="xl"
                                            endContent={
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            }
                                        >
                                            Pay & Activate Plan
                                        </Button>
                                    </div>

                                    {/* Terms and Agreements Statement */}
                                    <p className="text-center text-[10px] font-medium text-slate-400">
                                        By clicking 'Pay & Activate Plan', you agree to StartupForge's
                                        <Link href="/terms" className="underline hover:text-slate-600 transition">
                                            Terms of Service
                                        </Link>
                                        .
                                    </p>
                                </form>
                            </Card.Content>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    );
}