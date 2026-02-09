'use client'

import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from '@react-pdf/renderer'
import {
  cvContact,
  cvSummary,
  cvSkills,
  cvLanguages,
  cvHobbies,
  cvExperience,
  cvProjects,
  cvEducation,
} from '@/lib/cv-data'

const SPRING_GREEN = '#6DB33F'
const INK = '#0B1220'
const GRAY_700 = '#374151'
const GRAY_600 = '#4B5563'
const GRAY_500 = '#6B7280'
const PAGE_PAD = 24
const A4_WIDTH = 595
const SIDEBAR_WIDTH = Math.round((A4_WIDTH - 2 * PAGE_PAD) * 0.30) // ~30%

const styles = StyleSheet.create({
  page: {
    padding: 0,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: INK,
  },
  // Full-width header (top)
  headerWrap: {
    width: A4_WIDTH,
    paddingHorizontal: PAGE_PAD,
    paddingTop: 18,
    paddingBottom: 16,
    backgroundColor: '#F5FAF3',
    borderBottomWidth: 3,
    borderBottomColor: SPRING_GREEN,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoWrap: {
    marginRight: 16,
  },
  photo: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    color: INK,
    marginBottom: 3,
    letterSpacing: 0.4,
  },
  title: {
    fontSize: 11,
    fontWeight: 600,
    color: SPRING_GREEN,
    marginBottom: 4,
  },
  location: {
    fontSize: 9,
    color: GRAY_600,
    marginBottom: 5,
  },
  contactLine: {
    fontSize: 8,
    color: GRAY_600,
  },
  // Two-column body
  bodyRow: {
    flexDirection: 'row',
    paddingHorizontal: PAGE_PAD,
    paddingTop: 12,
    paddingBottom: PAGE_PAD,
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    paddingRight: 14,
    borderRightWidth: 1,
    borderRightColor: GRAY_500,
  },
  sidebarSectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: INK,
    marginBottom: 10,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  skillGroup: {
    marginBottom: 12,
  },
  skillGroupTitle: {
    fontSize: 8,
    fontWeight: 700,
    color: SPRING_GREEN,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  skillTags: {
    fontSize: 7.5,
    color: GRAY_700,
    lineHeight: 1.4,
  },
  languagesSection: {
    marginTop: 18,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: GRAY_500,
  },
  languageItem: {
    fontSize: 7.5,
    color: GRAY_700,
    lineHeight: 1.5,
    marginBottom: 3,
  },
  hobbiesSection: {
    marginTop: 14,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: GRAY_500,
  },
  hobbyItem: {
    fontSize: 7.5,
    color: GRAY_700,
    lineHeight: 1.5,
    marginBottom: 2,
  },
  main: {
    flex: 1,
    paddingLeft: 18,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: INK,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: GRAY_500,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  summaryText: {
    fontSize: 8.5,
    lineHeight: 1.45,
    color: GRAY_700,
    textAlign: 'justify',
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: INK,
  },
  jobDates: {
    fontSize: 8,
    color: GRAY_600,
  },
  company: {
    fontSize: 8.5,
    color: GRAY_600,
    marginBottom: 4,
  },
  bulletList: {
    marginLeft: 4,
  },
  bullet: {
    fontSize: 8,
    color: GRAY_700,
    lineHeight: 1.4,
    marginBottom: 1.5,
    paddingLeft: 6,
  },
  experienceBlock: {
    marginBottom: 7,
  },
  projectName: {
    fontSize: 9,
    fontWeight: 700,
    color: INK,
    marginBottom: 2,
  },
  projectStack: {
    fontSize: 7.5,
    color: SPRING_GREEN,
    marginBottom: 2,
  },
  projectDesc: {
    fontSize: 8,
    color: GRAY_700,
    lineHeight: 1.4,
  },
  educationRow: {
    marginBottom: 4,
  },
  educationDegree: {
    fontSize: 8.5,
    fontWeight: 600,
    color: INK,
  },
  educationInstitution: {
    fontSize: 7.5,
    color: GRAY_600,
  },
})

export interface CVDocumentProps {
  photoUrl?: string
}

export function CVDocument({ photoUrl }: CVDocumentProps) {
  const contactParts = [
    cvContact.email,
    cvContact.phone,
    cvContact.linkedin,
    cvContact.github,
    cvContact.portfolio,
  ].filter(Boolean)
  const contactLine = contactParts.join(' | ')

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* 1. Full-width header */}
        <View style={styles.headerWrap}>
          <View style={styles.header}>
            {photoUrl ? (
              <View style={styles.photoWrap}>
                {/* eslint-disable-next-line jsx-a11y/alt-text -- react-pdf Image has no alt prop */}
                <Image src={photoUrl} style={styles.photo} />
              </View>
            ) : null}
            <View style={styles.headerText}>
              <Text style={styles.name}>{cvContact.fullName}</Text>
              <Text style={styles.title}>{cvContact.title}</Text>
              <Text style={styles.location}>{cvContact.location}</Text>
              <Text style={styles.contactLine}>{contactLine}</Text>
            </View>
          </View>
        </View>

        {/* 2. Two-column body: sidebar (30%) + main (70%) */}
        <View style={styles.bodyRow}>
          <View style={styles.sidebar}>
            <Text style={styles.sidebarSectionTitle}>Skills</Text>
            <View style={styles.skillGroup}>
              <Text style={styles.skillGroupTitle}>Backend</Text>
              <Text style={styles.skillTags}>{cvSkills.backend.join(', ')}</Text>
            </View>
            <View style={styles.skillGroup}>
              <Text style={styles.skillGroupTitle}>Frontend</Text>
              <Text style={styles.skillTags}>{cvSkills.frontend.join(', ')}</Text>
            </View>
            <View style={styles.skillGroup}>
              <Text style={styles.skillGroupTitle}>Databases</Text>
              <Text style={styles.skillTags}>{cvSkills.database.join(', ')}</Text>
            </View>
            <View style={styles.skillGroup}>
              <Text style={styles.skillGroupTitle}>Security</Text>
              <Text style={styles.skillTags}>{cvSkills.security.join(', ')}</Text>
            </View>
            <View style={styles.skillGroup}>
              <Text style={styles.skillGroupTitle}>Cloud & DevOps</Text>
              <Text style={styles.skillTags}>{cvSkills.cloudDevops.join(', ')}</Text>
            </View>
            <View style={styles.skillGroup}>
              <Text style={styles.skillGroupTitle}>Architecture</Text>
              <Text style={styles.skillTags}>{cvSkills.architecture.join(', ')}</Text>
            </View>
            <View style={styles.languagesSection}>
              <Text style={styles.sidebarSectionTitle}>Languages</Text>
              {cvLanguages.map((lang, i) => (
                <Text key={i} style={styles.languageItem}>{lang}</Text>
              ))}
            </View>
            <View style={styles.hobbiesSection}>
              <Text style={styles.sidebarSectionTitle}>Hobbies</Text>
              {cvHobbies.map((hobby, i) => (
                <Text key={i} style={styles.hobbyItem}>{hobby}</Text>
              ))}
            </View>
          </View>

          <View style={styles.main}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Summary</Text>
              <Text style={styles.summaryText}>{cvSummary}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experience</Text>
              {cvExperience.map((job, i) => (
                <View key={i} style={styles.experienceBlock}>
                  <View style={styles.jobHeader}>
                    <Text style={styles.jobTitle}>{job.jobTitle}</Text>
                    <Text style={styles.jobDates}>{job.dates}</Text>
                  </View>
                  <Text style={styles.company}>{job.company}</Text>
                  <View style={styles.bulletList}>
                    {job.bullets.map((b, j) => (
                      <Text key={j} style={styles.bullet}>{`• ${b}`}</Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Projects</Text>
              {cvProjects.map((proj, i) => (
                <View key={i} style={styles.experienceBlock}>
                  <Text style={styles.projectName}>{proj.name}</Text>
                  <Text style={styles.projectStack}>{proj.stack}</Text>
                  <Text style={styles.projectDesc}>{proj.description}</Text>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              {cvEducation.map((edu, i) => (
                <View key={i} style={styles.educationRow}>
                  <Text style={styles.educationDegree}>{edu.degree}</Text>
                  <Text style={styles.educationInstitution}>{edu.institution}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}
