<script setup>

</script>
<template>
    <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- navbar -->
            <div class="navbar bg-base-100 flex justify-center items-center shadow-md">
                <div class="w-full">
                    <label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden">
                        <IconList icontype='menu' color='black' size='20' />
                    </label>
                    <div class="flex justify-end gap-2 mx-2 w-full">
                        <div class="form-control">
                            <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
                        </div>
                        <div class="dropdown dropdown-end mx-2">
                            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                                <div class="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span class="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>
                            <div tabindex="0"
                                class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                <div class="card-body">
                                    <span class="text-lg font-bold">8 Items</span>
                                    <span class="text-info">Subtotal: $999</span>
                                    <div class="card-actions">
                                        <button class="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main class="w-11/12 py-8 mx-auto">
                <!-- main content -->
                <slot></slot>
            </main>
        </div>

        <!-- side bar -->
        <div class="drawer-side z-[2]">
            <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <!-- Sidebar content here -->
                 <p class="text-3xl text-center btn btn-ghost">Restuarant</p>
                 <div class="mt-8">
                     <li><a>Sidebar Item 1</a></li>
                     <li><a>Sidebar Item 2</a></li>

                 </div>
            </ul>
        </div>
    </div>
</template>