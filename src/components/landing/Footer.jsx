import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { 
  FileSpreadsheet, 
  ExternalLink,
  Heart
} from 'lucide-react';

export default function Footer() {
  const links = {
    products: [
      { label: 'Шаблон для фінансів PRO', href: createPageUrl('ProductPro') },
      { label: 'Шаблон для складу', href: createPageUrl('ProductWarehouse') },
      { label: 'Калькулятор кошторису', href: createPageUrl('ProductEstimate') },
      { label: 'Таблиця Lite', href: createPageUrl('ProductLite') },
      { label: 'Індивідуальне рішення', href: createPageUrl('CustomSolution') },
    ],
    company: [
      { label: 'Як це працює', href: createPageUrl('Home') + '#features' },
      { label: 'Для кого підходить', href: createPageUrl('Home') + '#for-who' },
      { label: 'Відгуки', href: createPageUrl('Home') + '#reviews' },
      { label: 'База знань', href: createPageUrl('Blog') },
      { label: 'Контакти', href: createPageUrl('Home') + '#contact' },
    ],
    legal: [
      { label: 'Політика конфіденційності', href: createPageUrl('Privacy') },
      { label: 'Публічний договір (оферта)', href: createPageUrl('Offer') },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/6bb2a5c14_Group481515.png" 
                alt="FinProsto - Готові таблиці для бізнесу"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-slate-400 mb-6">
              Готові таблиці для обліку фінансів. Керуйте бізнесом на основі цифр.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://t.me/anhelinka_marishchak" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1.01.54-1.45.52-.48-.01-1.39-.27-2.07-.49-.84-.27-1.51-.42-1.45-.89.03-.24.37-.49 1.02-.74 4-1.74 6.67-2.89 8.01-3.46 3.82-1.59 4.61-1.87 5.13-1.87.11 0 .37.03.54.17.14.12.18.28.2.45-.01.05.01.13 0 .2z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Продукти</h4>
            <ul className="space-y-3">
              {links.products.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Компанія</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Документи</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-slate-400 text-sm">
                © 2025 FinProsto. Всі права захищені.
              </p>
              <p className="text-slate-400 text-xs">
                ФОП Скрипка Г.І • ЄДРПОУ/ІПН 1997112188
              </p>
            </div>
            <p className="text-slate-400 text-sm flex items-center gap-1">
              Зроблено з <Heart className="w-4 h-4 text-red-500 fill-red-500" /> в Україні
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}