<template>
    <div v-badge.danger>
        <svg>
            <use
                :xlink:href="
                    require('@/assets/frontend/images/service/icons/default.svg') +
                    `#admin_header_alert`
                "
            />
        </svg>
    </div>

    <!-- <i class="pi pi-bell p-text-secondary" v-badge.danger></i> -->
</template>