import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

declare global {
  interface Window {
    SimplybookWidget: any
    gtag: (
      command: string,
      action: string,
      params?: {
        [key: string]: any
        send_to?: string
        value?: number
        currency?: string
      }
    ) => void
  }
}

function BookingWidget() {
  const router = useRouter()
  const widgetContainerRef = useRef(null)

  useEffect(() => {
    // Ajouter le style CSS pour masquer le header
    const style = document.createElement('style')
    style.textContent = `
      #header.widget,
      .nav-wrapper,
      #sb_menu,
      .items-wrapper,
      #sb_ada_module,
      .ada-compliance__wrapper {
        display: none !important;
        height: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
        opacity: 0 !important;
        visibility: hidden !important;
      }
      
      .simplybook-widget-iframe {
        margin-top: 0 !important;
        padding-top: 0 !important;
      }
    `
    document.head.appendChild(style)

    const script = document.createElement('script')
    script.async = true
    script.src = '//widget.simplybook.it/v2/widget/widget.js'
    script.onload = () => {
      new window.SimplybookWidget({
        widget_type: 'iframe',
        url: 'https://lodgicdev.simplybook.it',
        theme: 'default',
        theme_settings: {
          timeline_hide_unavailable: '1',
          hide_past_days: '0',
          timeline_show_end_time: '0',
          timeline_modern_display: 'as_slots',
          sb_base_color: '#2563eb',
          display_item_mode: 'block',
          booking_nav_bg_color: '#2563eb',
          body_bg_color: '#ffffff',
          dark_font_color: '#1e293b',
          light_font_color: '#ffffff',
          btn_color_1: '#2563eb',
          sb_company_label_color: '#1e293b',
          hide_img_mode: '0',
          show_sidebar: '0',
          sb_busy: '#e2e8f0',
          sb_available: '#bfdbfe',
          calendar_header_bg: '#2563eb',
          primary_text_color: '#1e293b',
          secondary_text_color: '#475569',
          form_bg_color: '#ffffff',
          form_border_color: '#e2e8f0',
          calendar_date_bg_color: '#ffffff',
          calendar_active_date_bg_color: '#2563eb',
          time_slot_bg_color: '#f8fafc',
          active_time_slot_bg_color: '#2563eb',
          font_family: 'Inter, sans-serif',
          hide_header: '1',
          hide_title: '1',
          hide_border: '1',
          hide_service_description: '0',
          hide_category_description: '0',
          hide_logo: '1',
          auto_height: '1',
          hide_navigation: '1',
          hide_cart: '1',
          hide_price: '1',
          hide_credits: '1',
          hide_social_buttons: '1',
          hide_reviews: '1',
          hide_search: '1',
        },
        timeline: 'modern',
        datepicker: 'top_calendar',
        is_rtl: false,
        app_config: {
          clear_session: 0,
          allow_switch_to_ada: 0,
          predefined: [],
          text_color: '#1e293b',
          primary_color: '#2563eb',
          show_progress_bar: true,
          unit_length: 45,
          skip_service_step: true,
          hide_provider_step: true,
          hide_client_info: false,
          hide_payment_step: true,
          disable_booking_status_page: true,
        },
        container_id: 'sbw_tq6fhw',
      })
    }
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
      document.head.removeChild(style)
    }
  }, [router])

  return (
    <div className="w-full h-full relative">
      <div
        id="sbw_tq6fhw"
        ref={widgetContainerRef}
        className="absolute inset-0 w-full h-full overflow-auto bg-white"
        style={
          {
            '--sb-font-family': 'Inter, sans-serif',
            '--sb-border-radius': '0.5rem',
          } as React.CSSProperties
        }
      />
    </div>
  )
}

export default BookingWidget
